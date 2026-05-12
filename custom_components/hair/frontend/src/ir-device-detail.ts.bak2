/**
 * Device detail view: header, progress bar, flat command list, and
 * entity summary.  Every learned command is shown as a simple row
 * with Test / Re-learn / Delete actions.
 */
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import "./ir-progress-bar.js";
import "./ir-command-row.js";
import "./ir-capture-dialog.js";
import "./ir-confirm-dialog.js";
import type { HairApi } from "./api.js";
import type { IRCommand, IRDevice } from "./types.js";

@customElement("ir-device-detail")
export class IrDeviceDetail extends LitElement {
    @property({ attribute: false }) public api!: HairApi;
    @property({ attribute: false }) public hass: any;
    @property({ attribute: false }) public device!: IRDevice;

    @state() private _busy = false;
    @state() private _captureName: string | null = null;
    @state() private _customDialogOpen = false;
    @state() private _customName = "";
    @state() private _toast: string | null = null;
    @state() private _confirmDelete = false;
    @state() private _commandToDelete: IRCommand | null = null;

    private async _refresh() {
        this.device = await this.api.getDevice(this.device.id);
        this.dispatchEvent(
            new CustomEvent("device-changed", {
                bubbles: true,
                composed: true,
            }),
        );
    }

    private _flash(message: string) {
        this._toast = message;
        setTimeout(() => {
            this._toast = null;
        }, 2400);
    }

    private async _onRelearn(e: CustomEvent) {
        const { templateName } = e.detail;
        this._captureName = templateName;
    }

    private async _onTest(e: CustomEvent) {
        const { command } = e.detail as { command: IRCommand };
        if (!command) return;
        this._busy = true;
        try {
            await this.api.sendCommand(this.device.id, command.id);
            this._flash(`Sent "${command.name}"`);
        } catch (err) {
            this._flash(`Send failed: ${(err as Error).message}`);
        } finally {
            this._busy = false;
        }
    }

    private _onDelete(e: CustomEvent) {
        const { command } = e.detail as { command: IRCommand };
        if (!command) return;
        this._commandToDelete = command;
    }

    private async _confirmCommandDelete(): Promise<void> {
        const command = this._commandToDelete;
        if (!command) return;
        this._commandToDelete = null;
        this._busy = true;
        try {
            await this.api.deleteCommand(this.device.id, command.id);
            await this._refresh();
            this._flash(`Removed "${command.name}"`);
        } catch (err) {
            this._flash(`Delete failed: ${(err as Error).message}`);
        } finally {
            this._busy = false;
        }
    }

    private _onCaptureClosed() {
        this._captureName = null;
    }

    private async _onCommandSaved(e: CustomEvent) {
        const { commandName } = e.detail as {
            commandName: string;
        };
        await this._refresh();
        this._flash(`Saved "${commandName}"`);
        this._captureName = null;
    }

    private _openCustomDialog() {
        this._customName = "";
        this._customDialogOpen = true;
    }

    private _closeCustomDialog() {
        this._customDialogOpen = false;
    }

    private _confirmCustom() {
        const name = this._customName.trim();
        if (!name) return;
        this._customDialogOpen = false;
        this._captureName = name;
    }

    private async _deleteDevice() {
        this._busy = true;
        try {
            await this.api.deleteDevice(this.device.id);
            this.dispatchEvent(
                new CustomEvent("device-deleted", {
                    bubbles: true,
                    composed: true,
                }),
            );
        } catch (err) {
            this._flash(`Delete failed: ${(err as Error).message}`);
        } finally {
            this._busy = false;
            this._confirmDelete = false;
        }
    }

    render() {
        const commands = this.device.commands;
        const count = commands.length;

        return html`
            <section class="header">
                <div>
                    <h1>${this.device.name}</h1>
                    <div class="subtitle">
                        ${this.device.emitter_entity_id}
                    </div>
                </div>
                <div class="header-actions">
                    <mwc-button
                        @click=${() => (this._confirmDelete = true)}
                        ?disabled=${this._busy}
                    >
                        Delete
                    </mwc-button>
                </div>
            </section>

            <ir-progress-bar
                .learned=${count}
                .total=${count || 1}
            ></ir-progress-bar>

            <ha-card>
                <h2>Commands (${count})</h2>
                ${commands.length > 0
                    ? commands.map(
                          (cmd) => html`
                              <ir-command-row
                                  .templateName=${cmd.name}
                                  .command=${cmd}
                                  .busy=${this._busy}
                                  @relearn=${this._onRelearn}
                                  @test=${this._onTest}
                                  @delete=${this._onDelete}
                              ></ir-command-row>
                          `,
                      )
                    : html`<div class="empty">No commands yet. Add one below.</div>`}
            </ha-card>

            <div class="custom-add">
                <mwc-button
                    raised
                    @click=${this._openCustomDialog}
                    ?disabled=${this._busy}
                >
                    + Add Command
                </mwc-button>
            </div>

            ${this._captureName
                ? html`
                      <ir-capture-dialog
                          .api=${this.api}
                          .hass=${this.hass}
                          .device=${this.device}
                          .commandName=${this._captureName}
                          @closed=${this._onCaptureClosed}
                          @command-saved=${this._onCommandSaved}
                      ></ir-capture-dialog>
                  `
                : ""}
            ${this._customDialogOpen
                ? html`
                      <ha-dialog
                          open
                          heading="Add Custom Command"
                          @closed=${this._closeCustomDialog}
                      >
                          <ha-textfield
                              label="Command name"
                              .value=${this._customName}
                              @input=${(e: Event) =>
                                  (this._customName = (
                                      e.target as HTMLInputElement
                                  ).value)}
                          ></ha-textfield>
                          <mwc-button slot="secondaryAction" @click=${this._closeCustomDialog}>
                              Cancel
                          </mwc-button>
                          <mwc-button slot="primaryAction" raised @click=${this._confirmCustom}>
                              Start Learning
                          </mwc-button>
                      </ha-dialog>
                  `
                : ""}
            ${this._confirmDelete
                ? html`
                      <ir-confirm-dialog
                          title="Delete ${this.device.name}?"
                          message="This removes all captured commands and the auto-created entity. The action cannot be undone."
                          confirmLabel="Delete"
                          .destructive=${true}
                          @confirmed=${this._deleteDevice}
                          @closed=${() => (this._confirmDelete = false)}
                      ></ir-confirm-dialog>
                  `
                : ""}
            ${this._commandToDelete
                ? html`
                      <ir-confirm-dialog
                          title="Delete command?"
                          message="Remove &quot;${this._commandToDelete.name}&quot;? This cannot be undone."
                          confirmLabel="Delete"
                          .destructive=${true}
                          @confirmed=${this._confirmCommandDelete}
                          @closed=${() => (this._commandToDelete = null)}
                      ></ir-confirm-dialog>
                  `
                : ""}
            ${this._toast
                ? html`<div class="toast" role="status">${this._toast}</div>`
                : ""}
        `;
    }

    static styles = css`
        :host {
            display: block;
        }
        .header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 12px;
        }
        h1 {
            font-size: 1.5rem;
            margin: 0;
        }
        .subtitle {
            color: var(--secondary-text-color);
            margin-top: 4px;
            font-size: 0.9rem;
        }
        .header-actions {
            display: flex;
            gap: 6px;
        }
        ha-card {
            margin: 16px 0;
            padding: 16px;
        }
        ha-card h2 {
            margin: 0 0 8px;
            font-size: 0.9rem;
            text-transform: uppercase;
            letter-spacing: 0.04em;
            color: var(--secondary-text-color);
        }
        .empty {
            color: var(--secondary-text-color);
            font-style: italic;
            padding: 12px 0;
        }
        .custom-add {
            margin: 16px 0;
        }
        .entity-summary .meta {
            font-size: 0.9rem;
            color: var(--primary-text-color);
            margin: 4px 0;
        }
        .destructive {
            --mdc-theme-primary: var(--error-color, #c62828);
        }
        .toast {
            position: fixed;
            bottom: 24px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--primary-color);
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
            z-index: 100;
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        "ir-device-detail": IrDeviceDetail;
    }
}
