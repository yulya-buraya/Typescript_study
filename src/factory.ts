//1 способ
interface IInsurance {
  id: number;
  status: string;
  setVehicle(vehicle: any): void;
  submit(): Promise<boolean>;
}

class TFInsurance implements IInsurance {
  id: number;
  status: string;
  private vehicle: any;
  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }
  async submit(): Promise<boolean> {
    const res = await fetch("", {
      method: "POST",
      body: JSON.stringify({ vehicle: this.vehicle }),
    });
    const data = await res.json();
    return data.isSuccess;
  }
}

class ABInsurance implements IInsurance {
  id: number;
  status: string;
  private vehicle: any;
  setVehicle(vehicle: any): void {
    this.vehicle = vehicle;
  }
  async submit(): Promise<boolean> {
    const res = await fetch("ab", {
      method: "POST",
      body: JSON.stringify({ vehicle: this.vehicle }),
    });
    const data = await res.json();
    return data.yes;
  }
}

abstract class InsuranceFactory {
  db: any;

  abstract createInsurance(): IInsurance;

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status);
  }
}

class TFInsuranceFactory extends InsuranceFactory {
  createInsurance(): TFInsurance {
    return new TFInsurance();
  }
}

class ABInsuranceFactory extends InsuranceFactory {
  createInsurance(): ABInsurance {
    return new ABInsurance();
  }
}

const tfInsuranceFactory = new TFInsuranceFactory();
const ins = tfInsuranceFactory.createInsurance();
tfInsuranceFactory.saveHistory(ins);

//2 способ
const INSURANCE_TYPE = {
  tf: TFInsurance,
  ab: ABInsurance,
};

type InsT = typeof INSURANCE_TYPE;

class InsuranceFactoryAlt {
  db: any;
  createInsurance<T extends keyof InsT>(type: T): InsT[T] {
    return INSURANCE_TYPE[type];
  }

  saveHistory(ins: IInsurance) {
    this.db.save(ins.id, ins.status);
  }
}
const insuranceAltFactory = new InsuranceFactoryAlt();
const ins2 = new (insuranceAltFactory.createInsurance("tf"))();
insuranceAltFactory.saveHistory(ins2);
