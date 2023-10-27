enum StatusType {
  sent = "sent",
  pending = "pending",
  notSent = "not-sent",
}

enum StautsColor {
  success = "green",
  pending = "orange",
  unknown = "red",
  default = "blue",
}

export function getStatus(type: StatusType): { text: string; color: string } {
  switch (type) {
    case StatusType.sent:
      return { text: "Item is send", color: StautsColor.success };
    case StatusType.pending:
      return { text: "Item is pending", color: StautsColor.pending };
    case StatusType.notSent:
      return { text: "Item is not sent", color: StautsColor.unknown };
    default:
      return { text: "unknown", color: StautsColor.default };
  }
}
