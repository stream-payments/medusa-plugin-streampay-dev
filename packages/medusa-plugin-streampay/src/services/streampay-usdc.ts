import StreamPayBase from "../core/streampay-base"
import { PaymentIntentOptions, PaymentProviderKeys } from "../types"

class UsdcProviderService extends StreamPayBase {
  static identifier = PaymentProviderKeys.USDC

  constructor(_, options) {
    super(_, options)
  }

  get paymentIntentOptions(): PaymentIntentOptions {
    return {
      payment_method_types: ["usdc"],
      capture_method: "automatic",
    }
  }
}

export default UsdcProviderService