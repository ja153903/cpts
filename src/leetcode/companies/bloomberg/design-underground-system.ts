type StationNode = { stationName: string; t: number };
type TravelInfo = { sum: number; count: number };

class UndergroundSystem {
   private customerToStation: Map<number, StationNode>;
   private stationToTravelInfo: Map<string, TravelInfo>;

   constructor() {
      this.customerToStation = new Map();
      this.stationToTravelInfo = new Map();
   }

   checkIn(id: number, stationName: string, t: number): void {
      if (!this.customerToStation.has(id)) {
         this.customerToStation.set(id, { stationName, t });
      }
   }

   checkOut(id: number, stationName: string, t: number): void {
      if (this.customerToStation.has(id)) {
         const stationNode = this.customerToStation.get(id)!;
         const key = `${stationNode.stationName},${stationName}`;
         if (this.stationToTravelInfo.has(key)) {
            const travelInfo = this.stationToTravelInfo.get(key)!;
            this.stationToTravelInfo.set(key, {
               sum: travelInfo.sum + t - stationNode.t,
               count: travelInfo.count + 1,
            });
         } else {
            this.stationToTravelInfo.set(key, {
               sum: t - stationNode.t,
               count: 1,
            });
         }

         this.customerToStation.delete(id);
      }
   }

   getAverageTime(startStation: string, endStation: string): number {
      const key = `${startStation},${endStation}`;
      if (this.stationToTravelInfo.has(key)) {
         const { sum, count } = this.stationToTravelInfo.get(key)!;
         return sum / count;
      }

      return 0;
   }
}

export { UndergroundSystem };
