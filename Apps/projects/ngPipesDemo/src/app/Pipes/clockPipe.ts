import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'clock'
})
export class ClockPipe implements PipeTransform {
    transform(date: Date, HourFormat) {
        if(!date){return;}
        let ampm= '', hours: number | string;
        let {hours: hours24, min , sec, zone } = this.extractTimeElements(date);
        if(HourFormat.match('12')){
            var result=this.convertTo12HFormat(hours24.toString());
            ampm = result.ampm;
            hours = result.hours;
        }else {
            hours = hours24;
        }
        
        return `${hours}:${min}:${sec} ${ampm} ${zone}`;
    }

    extractTimeElements(date: Date) {
        let strDate = date.toTimeString();
        let zone = strDate.match(/\(([^)]+)\)/g)[0].replace(/\(/g, '').replace(/\)/g, '') ;
        let hours = date.getHours() < 10 ? "0"+date.getHours().toString() : date.getHours();
        let min: number|string = date.getMinutes();
        min = min <10 ? "0"+min.toString() : min;
        let sec: number|string = date.getSeconds();
        sec = sec <10 ? "0"+sec.toString() : sec;
        return {
            hours: hours.toString() , zone, min, sec
        }
    }
    convertTo12HFormat (hours: string) {
        let hourNumber = parseInt(hours);
        let ampm: string;
        ampm= hourNumber<12 ? "AM" : "PM";
        hourNumber= hourNumber<=12 ? hourNumber : hourNumber%12;
        
        return { hours: hourNumber, ampm};
    }
}
