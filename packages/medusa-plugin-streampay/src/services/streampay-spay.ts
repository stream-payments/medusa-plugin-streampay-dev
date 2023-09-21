import StreamPayBase from "../core/streampay-base"
import { PaymentIntentOptions, PaymentProviderKeys } from "../types"

class SpayProviderService extends StreamPayBase {
  static identifier = PaymentProviderKeys.SPAY

  constructor(_, options) {
    super(_, options)
  }

  get paymentIntentOptions(): PaymentIntentOptions {
    return {
      payment_method_types: ["spay"],
      capture_method: "automatic",
    }
  }
}

export default SpayProviderService