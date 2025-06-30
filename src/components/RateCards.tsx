import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface RateCardProps {
  vehicle: string;
  image: string;
  weight: string;
  size?: string;
  price: string;
  description: string;
  knowMoreLink?: string;
}

export function RateCard({
  vehicle,
  image,
  weight,
  size,
  price,
  description,
  knowMoreLink,
}: RateCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 w-full md:w-[350px] text-center border border-gray-200 m-2">
      <div className="mb-4">
        <img src={image} alt={vehicle} style={{ height: 120, margin: "0 auto" }} />
      </div>
      {size && (
        <div className="text-sm text-gray-500 mb-1">{size}</div>
      )}
      <Badge className="mb-2 text-base bg-blue-100 text-blue-700">{weight}</Badge>
      <div className="font-bold text-xl mb-1">{vehicle}</div>
      <div className="text-md mb-2">Starting from <b>{price}</b></div>
      <div className="text-sm text-gray-600 mb-2">{description}</div>
      {knowMoreLink && (
        <Button asChild variant="link" className="font-bold text-blue-600">
          <a href={knowMoreLink}>Know more</a>
        </Button>
      )}
    </div>
  );
}

// Specialized rate card groups for each service

export function BikeRateCards() {
  return (
    <div>
      <div className="text-center font-bold text-2xl mb-8">Two-Wheelers from Porter</div>
      <div className="flex justify-center flex-wrap">
        <RateCard
          vehicle="2 Wheeler"
          image="/2wheeler.svg"
          weight="20 kg"
          size="40cm x 40cm"
          price="₹32.5"
          description="Base fare is inclusive of 1.0 km distance & 25 minutes of order time. Pricing may vary basis locality. Please note, road tax, parking fee, etc, will be applicable over and above ride fare."
          knowMoreLink="#"
        />
      </div>
    </div>
  );
}

export function TruckRateCards({ type }: { type: "light" | "heavy" }) {
  return (
    <div>
      <div className="text-center font-bold text-2xl mb-2">Book Mini Trucks in Ahmedabad</div>
      <div className="flex justify-center mb-6">
        <div
          className={`font-${type === "light" ? "bold" : "normal"} ${type === "light" ? "border-b-2 border-gray-900" : ""} mr-4 text-lg`}
        >
          Light (below 750kg)
        </div>
        <div
          className={`font-${type === "heavy" ? "bold" : "normal"} ${type === "heavy" ? "border-b-2 border-gray-900" : ""} text-lg`}
        >
          Heavy (above 750kg)
        </div>
      </div>
      <div className="flex justify-center flex-wrap">
        {type === "light" ? (
          <>
            <RateCard
              vehicle="3 Wheeler"
              image="/3wheeler.svg"
              weight="500 kg"
              size="5ft x 6ft"
              price="₹160"
              description="Ideal for small loads and quick city deliveries."
              knowMoreLink="#"
            />
            <RateCard
              vehicle="Tata Ace"
              image="/tataace.svg"
              weight="750 kg"
              size="6ft x 7ft"
              price="₹205"
              description="Perfect for slightly larger loads and city moves."
              knowMoreLink="#"
            />
          </>
        ) : (
          <>
            <RateCard
              vehicle="Pickup 8ft"
              image="/pickup8ft.svg"
              weight="1250kg"
              size="5.5ft x 8ft"
              price="₹300"
              description="For medium loads and intercity moves."
              knowMoreLink="#"
            />
            <RateCard
              vehicle="Canter 14ft"
              image="/canter14ft.svg"
              weight="3500kg"
              size="5.5ft x 14ft"
              price="₹1050"
              description="For large loads and long distance moves."
              knowMoreLink="#"
            />
            <RateCard
              vehicle="1.7 ton"
              image="/1.7ton.svg"
              weight="1700 kg"
              size="6.1ft x 9ft"
              price="₹380"
              description="For heavy loads and bulk transport."
              knowMoreLink="#"
            />
          </>
        )}
      </div>
    </div>
  );
}

export function PackersMoversCards() {
  return (
    <div className="my-16">
      <div className="text-center font-bold text-2xl mb-8">House Shifting Services with Best Packers and Movers in Ahmedabad</div>
      <div className="flex justify-center flex-wrap gap-12">
        <div className="text-center">
          <div className="mb-4"><img src="/handshake.svg" alt="Damage-Free Shifting" style={{ height: 64 }} /></div>
          <div className="font-bold">100% Damage-Free Shifting</div>
          <div className="text-gray-600">Packers and movers services with safety at every step.</div>
        </div>
        <div className="text-center">
          <div className="mb-4"><img src="/rupee.svg" alt="Affordable & Assured" style={{ height: 64 }} /></div>
          <div className="font-bold">Affordable & Assured</div>
          <div className="text-gray-600">Reliable packers and movers services at economical prices.</div>
        </div>
        <div className="text-center">
          <div className="mb-4"><img src="/expert.svg" alt="Expert Handling" style={{ height: 64 }} /></div>
          <div className="font-bold">Expert Handling</div>
          <div className="text-gray-600">Professionally trained experts for damage-free shifting</div>
        </div>
      </div>
    </div>
  );
}

export function IntercityCourierCards() {
  return (
    <div className="my-16">
      <div className="text-center font-bold text-2xl mb-8">Why is Porter your go-to for Intercity Courier Services?</div>
      <div className="text-center text-gray-600 mb-8">
        Your reliable intercity courier partner to ship all your parcels to 19000+ Indian pincodes. Hassle-free & easy to send couriers for all individuals and businesses.
      </div>
      <div className="flex justify-center flex-wrap gap-12">
        <div className="text-center">
          <div className="mb-4"><img src="/door.svg" alt="Door-to-Door Delivery" style={{ height: 64 }} /></div>
          <div className="font-bold">Door-to-Door Delivery</div>
          <div className="text-gray-600">Enjoy doorstep pick-up & delivery with Porter Intercity Courier Services</div>
        </div>
        <div className="text-center">
          <div className="mb-4"><img src="/clock.svg" alt="Timely Deliveries" style={{ height: 64 }} /></div>
          <div className="font-bold">Timely Deliveries</div>
          <div className="text-gray-600">Choose the mode of intercity courier delivery, via air or surface, for reliable and on-time parcel deliveries</div>
        </div>
        <div className="text-center">
          <div className="mb-4"><img src="/label.svg" alt="Shipping Label Printing On Us" style={{ height: 64 }} /></div>
          <div className="font-bold">Shipping Label Printing On Us</div>
          <div className="text-gray-600">Just mention your CR number and we take care of printing shipping labels for you</div>
        </div>
      </div>
    </div>
  );
}
