import StreamPayBase from "../core/streampay-base"
import { PaymentIntentOptions, PaymentProviderKeys } from "../types"

class EurcProviderService extends StreamPayBase {
  static identifier = PaymentProviderKeys.EURC

  constructor(_, options) {
    super(_, options)
  }

  get paymentIntentOptions(): PaymentIntentOptions {
    return {
      payment_method_types: ["eurc"],
      capture_method: "automatic",
    }
  }
}

export default EurcProviderService