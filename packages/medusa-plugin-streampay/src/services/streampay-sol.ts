import StreamPayBase from "../core/streampay-base"
import { PaymentIntentOptions, PaymentProviderKeys } from "../types"

class SolProviderService extends StreamPayBase {
  static identifier = PaymentProviderKeys.SOL

  constructor(_, options) {
    super(_, options)
  }

  get paymentIntentOptions(): PaymentIntentOptions {
    return {
      payment_method_types: ["sol"],
      capture_method: "automatic",
    }
  }
}

export default SolProviderService