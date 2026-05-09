/**
 * Reusable confirmation dialog using HA-native ha-dialog wrapper.
 *
 * Usage:
 *   <ir-confirm-dialog
 *       .title=${"Delete signal?"}
 *       .message=${"This action cannot be undone."}
 *       .confirmLabel=${"Delete"}
 *       .destructive=${true}
 *       @confirmed=${this._onConfirmed}
 *       @closed=${this._onClosed}
 *   ></ir-confirm-dialog>
 */
import { LitElement, html, css } from "lit";
import { customElement, property, state } from "lit/decorators.js";

@customElement("ir-confirm-dialog")
export class IrConfirmDialog extends LitElement {
    @property() public title = "Confirm";
    @property() public message = "Are you sure?";
    @property() public confirmLabel = "Confirm";
    @property() public cancelLabel = "Cancel";
    @property({ type: Boolean }) public destructive = false;
    @state() private _busy = false;

    private _close(): void {
        this.dispatchEvent(
            new CustomEvent("closed", { bubbles: true, composed: true }),
        );
    }

    private _confirm(): void {
        this.dispatchEvent(
            new CustomEvent("confirmed", { bubbles: true, composed: true }),
        );
    }

    render() {
        return html`
            <ha-dialog
                open
                .heading=${this.title}
                scrimClickAction=""
                @closed=${this._close}
            >
                <p class="message">${this.message}</p>

                <mwc-button
                    slot="secondaryAction"
                    @click=${this._close}
                >
                    ${this.cancelLabel}
                </mwc-button>
                <mwc-button
                    slot="primaryAction"
                    raised
                    class=${this.destructive ? "destructive" : ""}
                    @click=${this._confirm}
                >
                    ${this.confirmLabel}
                </mwc-button>
            </ha-dialog>
        `;
    }

    static styles = css`
        .message {
            margin: 8px 0 16px;
            color: var(--primary-text-color);
            line-height: 1.5;
        }
        .destructive {
            --mdc-theme-primary: var(--error-color, #db4437);
        }
    `;
}

declare global {
    interface HTMLElementTagNameMap {
        "ir-confirm-dialog": IrConfirmDialog;
    }
}
