import { v4 as uuid } from "uuid";

class User {
  constructor(
    name = "",
    phone = "",
    governorate = "",
    city = "",
    location = "",
    password = ""
  ) {
    this.name = name;
    this.phone = phone;
    this.governorate = governorate;
    this.city = city;
    this.location = location;
    this.password = password;
    this.id = uuid();
  }
}

class Car {
  constructor(make = "", model = "", year = "", color = "", km = 0) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.km = km;
    this.id = uuid();
  }
}

class nextMaintenance {
  constructor(carId, maintenanceId, nextKm = 0, nextDate = "") {
    this.carId = carId;
    this.maintenanceId = maintenanceId;
    this.nextKm = nextKm;
    this.nextDate = nextDate;
    this.id = uuid();
  }
}

class maintenanceOperation {
  constructor(
    date = "",
    vendor = "",
    maker = "",
    vPrice = 0,
    mPrice = 0,
    km = 0,
    nextDate = "",
    nextKm = 0,
    notes = "",
    maintenanceTypeId = ""
  ) {
    this.date = date;
    this.vendor = vendor;
    this.maker = maker;
    this.vPrice = vPrice;
    this.mPrice = mPrice;
    this.km = km;
    this.nextDate = nextDate;
    this.nextKm = nextKm;
    this.notes = notes;
    this.maintenanceTypeId = maintenanceTypeId;
    this.id = uuid();
  }
}

class recordKm {
  constructor(date = "", km = 0) {
    this.date = date;
    this.km = km;
    this.id = uuid();
  }
}

class maintenanceType {
  constructor(title = "", kmRate = 0, timeRate = 0) {
    this.title = title;
    this.kmRate = kmRate;
    this.timeRate = timeRate;
    this.id = uuid();
  }
}
