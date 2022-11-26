import { isInTheFuture, isInThePast } from "./dateUtils";

export class NodeJsVersion {
  constructor(
    public readonly version: string,
    public readonly codename: string | undefined,
    public readonly start: Date | undefined,
    public readonly lts: Date | undefined,
    public readonly maintenance: Date | undefined,
    public readonly end: Date | undefined
  ) {}

  public notYetCurrent = (): boolean => !!this.start && isInTheFuture(this.start);
  public hasStartedBeingCurrent = (): boolean => !!this.start && isInThePast(this.start);

  public notYetLts = (): boolean => !this.lts || (!!this.lts && isInTheFuture(this.lts));
  public hasStartedBeingLts = (): boolean => !!this.lts && isInThePast(this.lts);

  public notYetMaintenance = (): boolean =>
    !this.maintenance || (!!this.maintenance && isInTheFuture(this.maintenance));
  public hasStartedBeingMaintenance = (): boolean =>
    !!this.maintenance && isInThePast(this.maintenance);

  public notYetOutOfSupport = (): boolean => !!this.end && isInTheFuture(this.end);
  public isOutOfSupport = (): boolean => !!this.end && isInThePast(this.end);

  public shouldBeUsedForWebsites = () => this.hasStartedBeingLts() && !this.isOutOfSupport();

  public canBeUsedForWebsites = () =>
    !this.shouldBeUsedForLibraries() && this.hasStartedBeingMaintenance() && !this.isOutOfSupport();

  public shouldBeUsedForLibraries = () =>
    this.hasStartedBeingCurrent() &&
    this.notYetLts() &&
    this.notYetMaintenance() &&
    this.notYetOutOfSupport();

  public shouldBeUsedForLibraryTests = () =>
    !this.shouldBeUsedForLibraries() &&
    (this.hasStartedBeingLts() || this.hasStartedBeingMaintenance()) &&
    this.notYetOutOfSupport();
}

export type PhaseName = keyof Pick<NodeJsVersion, "start" | "lts" | "maintenance" | "end">;
