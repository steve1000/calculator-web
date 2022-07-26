import React, { useState } from "react";
import classNames from "classnames";
import SelectInput from "./components/select";
import data from "./data/car.json";

function Prototype() {
  const { vehicles } = data.data;
  const [filteredVehicles, setFilteredVehicles] = useState(vehicles);
  const [knownAttributes, setKnownAttributes] = useState(new Set());
  const [transmissions, setTransmissions] = useState(
    new Set(
      vehicles.map((car) => {
        return car.vehicle.engine.transmission_type;
      })
    )
  );
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [variants, setVariants] = useState(
    new Set(
      filteredVehicles.map((car) => {
        return car.vehicle.equipment_level;
      })
    )
  );
  const [selectedVariant, setSelectedVariant] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const [bodyTypes, setBodyTypes] = useState(new Set());
  const [selectedBodyType, setSelectedBodyType] = useState("");

  const [engineSizes, setEngineSizes] = useState(new Set());
  const [selectedEngineSize, setSelectedEngineSize] = useState("");

  // Body type
  // engine size
  // variant

  // if > 5, paginate results

  return (
    <div className="p-5">
      <h1 className="text-2xl mb-4">Let's find your car</h1>
      <div className="w-[600px]">
        <div className="flex justify-start gap-2 flex-wrap mb-8">
          <SelectInput label="Year" value="2021" />
          <SelectInput label="Make" value="Toyota" />
          <SelectInput label="Model" value="Yaris" />
        </div>
        <div>
          <h2 className="font-semibold mb-4">Transmission</h2>
          <div className="flex justify-start flex-wrap gap-4 mb-4">
            {Array.from(transmissions).map((transmission) => {
              return (
                <div
                  key={transmission}
                  onClick={() => {
                    setKnownAttributes(knownAttributes.add("transmission"));
                    setSelectedTransmission(transmission);
                    setSelectedVariant("");
                    const newFilteredVehicles = vehicles.filter((car) => {
                      return (
                        car.vehicle.engine.transmission_type === transmission
                      );
                    });
                    setFilteredVehicles(newFilteredVehicles);
                    setVariants(
                      new Set(
                        newFilteredVehicles.map((car) => {
                          return car.vehicle.equipment_level;
                        })
                      )
                    );
                    setSelectedVehicle("");
                  }}
                  className={classNames(
                    "border-grey-dark-border border-1 rounded-md pt-2 pb-2 pl-7 pr-7 cursor-pointer",
                    {
                      "bg-purple": transmission === selectedTransmission,
                      "text-white": transmission === selectedTransmission,
                    }
                  )}
                >
                  {transmission}
                </div>
              );
            })}
          </div>
        </div>
        <div className="mb-12">
          {knownAttributes.has("transmission") && (
            <div>
              <h2 className="font-semibold mb-4">Variant</h2>
              <div className="flex justify-start flex-wrap gap-4 mb-4">
                {Array.from(variants).map((variant) => {
                  return (
                    <div
                      key={variant}
                      onClick={() => {
                        setKnownAttributes(knownAttributes.add("variant"));
                        setSelectedVariant(variant);
                        const newFilteredVehicles = vehicles.filter((car) => {
                          return (
                            car.vehicle.equipment_level === variant &&
                            car.vehicle.engine.transmission_type ===
                              selectedTransmission
                          );
                        });
                        setFilteredVehicles(newFilteredVehicles);
                        setSelectedVehicle("");
                      }}
                      className={classNames(
                        "border-grey-dark-border border-1 rounded-md pt-2 pb-2 pl-7 pr-7 cursor-pointer",
                        {
                          "bg-purple": variant === selectedVariant,
                          "text-white": variant === selectedVariant,
                        }
                      )}
                    >
                      {variant}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        {filteredVehicles.length < 20 && (
          <div>
            {filteredVehicles.map((car) => {
              return (
                <div
                  key={car.vehicle.vehicle_identifier}
                  className={classNames(
                    "border-grey-light-border border-1 rounded-2xl pt-4 pb-4 pl-5 pr-5 cursor-pointer mb-5 bg-light-grey",
                    {
                      "outline-purple outline-8 outline":
                        car.vehicle.vehicle_identifier === selectedVehicle,
                    }
                  )}
                  onClick={() => {
                    setSelectedVehicle(car.vehicle.vehicle_identifier);
                  }}
                >
                  <div className="mb-4">
                    {car.vehicle.year} {car.vehicle.make}
                  </div>
                  <div className="flex flex-row gap-8 flex-wrap">
                    <div className="text-xs">
                      <div className="text-grey-dark-border">MODEL</div>
                      <div>{car.vehicle.model}</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-grey-dark-border">Vehicle ID</div>
                      <div>{car.vehicle.vehicle_identifier}</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-grey-dark-border">Body type</div>
                      <div>{car.vehicle.body_type}</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-grey-dark-border">Variant</div>
                      <div>{car.vehicle.equipment_level}</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-grey-dark-border">Engine size</div>
                      <div>{car.vehicle.engine.capacity_value_litres}</div>
                    </div>
                    <div className="text-xs">
                      <div className="text-grey-dark-border">Engine type</div>
                      <div>{car.vehicle.engine.type}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Prototype;
