export class GiftRegistry {
  private registry = new Map<number, string[]>();

  constructor() {
    this.registry = new Map<number, string[]>();
  }

  addGift(childId: number, gift: string) {
    const gifts = this.registry.get(childId) || [];
    this.registry.set(childId, [...gifts, gift]);
  }

  removeGift(childId: number, gift: string) {
    const gifts = this.registry.get(childId) || [];

    if (!gifts.includes(gift)) {
      throw new Error("Gift not found");
    }

    this.registry.set(
      childId,
      gifts.filter((g) => g !== gift)
    );
  }

  getGiftsForChild(childId: number) {
    return this.registry.get(childId) || [];
  }
}
