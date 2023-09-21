import StreamPayBase from "../core/streampay-base"
import { PaymentIntentOptions, PaymentProviderKeys } from "../types"

class StrmProviderService extends StreamPayBase {
  static identifier = PaymentProviderKeys.STRM

  constructor(_, options) {
    super(_, options)
  }

  get paymentIntentOptions(): PaymentIntentOptions {
    return {
      payment_method_types: ["strm"],
      capture_method: "automatic",
    }
  }
}

export default StrmProviderService