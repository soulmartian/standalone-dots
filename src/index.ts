type Options = {
  position?: number;
  countDots?: number;
};

type Settings = {
  position: number;
  countDots: number;
};

export default class StandaloneDots {
  private settings: Settings;

  public constructor(container: HTMLElement, options?: Options) {
    if (options) {
      this.settings = this.mergeSettingsWithOptions(this.getDefaultSettings(), options);
    } else {
      this.settings = this.getDefaultSettings();
    }
  }

  public addDotLeft(): void {}

  public addDotRight(): void {}

  public removeDotLeft(): void {}

  public removeDotRight(): void {}

  public movePositionLeft(): void {}

  public movePositionRight(): void {}

  public movePositionTo(position: number): void {}

  private mergeSettingsWithOptions(settings: Settings, options: Options): Settings {
    return { ...settings, ...options };
  }

  private getDefaultSettings(): Settings {
    return {
      position: 1,
      countDots: 3
    };
  }
}
