import {OnOff} from "./OnOff";

export default {
  component: OnOff
}

export const OnMode = () => <OnOff defaultOn={true}/>
export const OffMode = () => <OnOff defaultOn={false}/>

