import printerimg from '../../assets/devices/3d Printer.jpg'
import scanner from  '../../assets/devices/3d scanner.jpg'
import pcbprototype from "../../assets/devices/pcb-prototype-machine.jpg";
import Lasercutting from "../../assets/devices/laser-cutting-machine.jpg";
import AXIX from "../../assets/devices/4axix.png";
import digitalmso from "../../assets/devices/digital-MSO.jpg";
import digitaloscilloscope from "../../assets/devices/keyside-EDU.jpg";
import multimeter from "../../assets/devices/digital-table-top-multiplayer.jpg";
import programmableLinear from "../../assets/devices/PROGRAMMABLE-LINEAR-DC-POWER-SUPPLY.jpg";
import cro from "../../assets/devices/CRO.jpg";
export const ifraData = [
    {
      id: 1,
      name:"3D Printer",
      img:printerimg,
      description: <div style={{textAlign:'justify'}}>	
	<li><b>Brand:</b> Raise3D Pro2 Plus Dual Extruder​	</li>
	<li><b>Print area:</b> 305 x 305 x 605 mm​	</li>
	<li><b>Accuracy:</b> 0.78 x 0.78 x 0.078 micron​	</li>
	<li><b>Max. Print speed:</b> 100 mm/s​	</li>
	<li><b>Min. layer height:</b> 10 microns​	</li>
	<li><b>Nozzle size, mm:</b> 0.2–0.8 mm​	</li>
	<li><b>Printable material:</b> PLA, ABS, HIPS, TPU, PC, Nylon, and other materials.</li>
      </div>,
    },
    {
      id: 2,
      name:"3D Scanner",
      img:scanner,
      description: <div>
      <li><b>Brand:</b> SHINING 3D EinScan Pro 2X 2020​	</li>
      <li><b>Scan Accuracy:</b> up to 0.045 mm ​	</li>
      <li><b>Volumetric Accuracy*:</b> 0.3 mm/m (Markers Alignment)​	</li>
      <li><b>Scan Speed:</b> 10 fps 3,000,000 points/s ​	</li>
      <li><b>Point Distance:</b> 0.2 mm-2 mm ​	</li>
      <li><b>Single Scan Range:</b> 150*120 mm ​	</li>
      <li><b>Depth of Field:</b> ±100 mm ​	</li>
      <li><b>Working Distance:</b> 400 mm ​	</li>
      <li><b>Light Source:</b> LED​	</li>
      </div>,
    },
    {
      id: 3,
      name:"PCB Prototype Machine",
      img:pcbprototype,
      description: <div>
        <li><b>Brand :</b> Scientech Nvis72​	</li>
        <li><b>Working area :</b> 230x200x15mm​	</li>
        <li><b>Minimum drill hole size :</b> 0.3 mm​	</li>
        <li><b>Minimum cutting trace/space :</b> 0.1 mm (4 mil)​	</li>
        <li><b>X/Y Resolution :</b> 0.006 mm​	</li>
        <li><b>Spindle speed (MAX. RPM) :</b> 25000 rpm​	</li>
        <li><b>Spindle Motor :</b> BLDC Motor​	</li>
        <li><b>Tool change :</b> Manual​	</li>
        <li><b>Tool holder :</b> 1/8 inch​	</li>
        <li><b>X/Y/Z driver :</b> Stepping Motor​	</li>
        <li><b>Dimensions (W x H x D) :</b> (432x320x455) mm​	</li>
        <li><b>Weight :</b> 28kg (approximately)​	</li>
        <li><b>Power consumption :</b> 110/220VAC, 50W​	</li>
        </div>,
    },
    {
      id: 4,
      name:"Laser Cutting Machine",
      img:Lasercutting,
      description: <div>		
	<li><b>PECS/MODEL:</b> AccuCut 1325​	</li>
	<li><b>Working Area:</b> 600x900mm ​	</li>
	<li><b>Laser Type:</b> Co2 DC Glass Laser Tube ​	</li>
	<li><b>Laser Power Option Glass Tube:</b> 100Watt​	</li>
	<li><b>Wave Length:</b> 10.6 μm​	</li>
	<li><b>Supply Voltage:</b> AC 230 V ±0.05% / AC 415 V ±0.05%​	</li>
	<li><b>Reposition Accuracy:</b> 0.1 mm (Max)​	</li>
	<li><b>Cutting Speed:</b> 0 ~ 30000 mm/min​	</li>
	<li><b>Engraving Speed:</b> 0 ~ 64000 mm/min​	</li>
	<li><b>Cooling:</b> Water Cooled​	</li>
	<li>X, Y Axis LM Guide Rails SIL Brand​	</li>
	<li><b>Work Environment:</b> Temp: 0 c ~ 45 c. Humidity: 5% ~ 95%​	</li>
	<li><b>Acceleration Speed:</b> 1 G​	</li>
	<li><b>Graphic File Support:</b> PLT, CDR, AI, DWG, DST, DXF, etc.</li>
        </div>,
    },
    {
      id: 5,
      name:"4AXIX CNC Wood Router",
      img:AXIX,
      description: <div>				
    <li><b>MODEL:</b> SIL – 1325 ​	</li>
	<li><b>X, Y Z Working area:</b> 1300x2500x250 mm ​	</li>
	<li><b>Resolution</b> ± 0.03/300 mm​	</li>
	<li><b>Repeatability</b> ± 0.03 mm​	</li>
	<li><b>CNC Spindle</b> 5.5 KW / Water Cooling Mechanism​	</li>
	<li><b>Max. RPM</b> 0-24000 rpm​	</li>
	<li><b>Max Working Speed</b> 0-18000 rpm​	</li>
	<li><b>Max. Consume Power</b> 5.5 KW ​	</li>
	<li>lathe Structure Welding Steel Structure​	</li>
	<li>X,Y,Z Structure Rack Pinion, Ball Screw linear Rails​	</li>
	<li><b>Working Voltage</b> AC 220V, 50/60 Hz, Single Phase / AC 415V, 50/60 Hz, Three Phase​	</li>
	<li><b>Working Mode</b> Stepper ​	</li>
	<li><b>Table</b> T-slot / Vacuum  bed / Water bed​	</li>
	<li><b>Memory</b> 128 MB (or Flash Drive)​	</li>
	<li><b>Optional 1:</b> Rotary Attachment Size Diameter 125mm, Length 1300mm​	</li>
			
        </div>,
    },

    {
      id: 6,
      name:"Digital MSO",
      img:digitalmso,
      description: <div>						
	<li><b>Brand:</b> RIGOL DS1104Z Plus ​	</li>
	<li><b>Channels :</b> 4 ​	</li>
	<li><b>Bandwidth:</b> 100 MHz ​	</li>
	<li><b>Maximum Sample Rate:</b> 1GSa/s (1Ch), 500MSa/s (2Ch), 250MSa/s (3 or 4Ch)​	</li>
	<li><b>Maximum Memory Depth:</b> 12Mpts (24Mpts Optional)​	</li>
	<li><b>Maximum Waveform Capture Rate:</b> 30,000wfms/s​	</li>
	<li><b>Time-Base Accuracy:</b> ≤±25ppm​	</li>
	<li><b>Time-Base Drift:</b> ≤±5ppm/year​	</li>
	<li><b>DC Gain Accuracy:</b>                  ±2% Full Scale ​	</li>
	<li><b>Real Time Waveform Record :</b>Up to 60,000 Frames​	</li>
	<li>Standard Trigger Functions Edge, Pulse Width, Slope, ​	</li>	
</div>,
    },
    {
      id: 7,
      name:"Digital Oscilloscope",
      img:digitaloscilloscope,
      description: <div>						
<li><b>Brand :</b> Keysight EDUX1002A​	</li>
<li><b>Scope Channels:</b> 2+1 Channel​	</li>
<li><b>Bandwidth:</b> 50MHz​	</li>
<li><b>Sampling Rate:</b> 1GSPS​	</li>
<li><b>Display Memory Depth:</b> 100 kpts​	</li>
<li><b>Calculated Rise Time:</b> 7ns​	</li>
<li><b>PC connectivity :</b>  USB host and USB device​	</li>
<li><b>Measurements :</b> Automatic​	</li>
</div>,
    },
    {
      id: 8,
      name:"Digital Table Top Multimeter",
      img:multimeter,
      description: <div>						
<li><b>Brand:</b> RIGOL DM3058E​</li>
<li><b>Max. Display:</b> 5½ Digits ​</li>
<li><b>Max. Reading:</b> 240.000 ​</li>
<li><b>Max. Sampling Rate:</b> 120 Sa/s ​</li>
<li><b>Memory Depth:</b> 10 groups of 2000 readings​</li>
<li><b>Measurement:</b> All kind of sensors​</li>
<li><b>Communication:</b>USB, GPIB , LAN and RS232 interfaces.​</li>
<li><b>Display:</b> Double Screen Display​</li>
</div>,
    },
    {
      id: 9,
      name:"Digital Table Top Multimeter",
      img:multimeter,
      description: <div>
        <li><b>Brand:</b> GWINSTEK AFG-2225​</li>
        <li><b>Wide Frequency Ranges :</b>  1μHz to 25MHz (sine/square wave)​</li>
        <li><b>Resolution:</b> 1 μHz in Full Range​</li>
        <li><b>Built-in Standard:</b> 120MSa/s, 10bit, 4k​      </li>
        <li><b>Output :</b> True Dual-Channel​      </li>
        <li><b>Supported  :</b> Couple, Tracking, Phase Operations​</li>
        <li><b>Square Waveform Adjustable Duty Cycle :</b>   1% ~ 99% ​</li>
        <li><b>Display :</b> High Resolution and Colored TFT LCD​</li>
        <li><b>Frequency Counter :</b> AM/FM/PM/FSK/SUM/Sweep/Burst and USB Host​</li> 
</div>,
    },
    {
      id: 10,
      name:"Programmable Linear DC Power Supply",
      img:programmableLinear,
      description: <div>
        <li><b>Brand:</b> RIGOL DP711​</li>
        <li><b>Output Voltage (max.):</b> 0 to +30 V/DC​</li>
        <li><b>Accuracy:</b> ±0.05% + 20 mV​</li>
        <li><b>Resolution:</b>10 mV (1 mV with high res. option)​</li>
        <li><b>Overvoltage Protection:</b> 0.01 V to 33 V​</li>
        <li><b>Load Regulation:</b> {'< '}0.01% + 2 mV​</li>
        <li><b>Ripple and Noise:</b> {'< '}500 µVrms / 3 mVpp​</li>
        <li><b>Output Current (max.):</b> 5 A/DC​</li>
        <li><b>Accuracy:</b> ±0.2% + 10 mA​</li>
        <li><b>Resolution:</b> 10 mA (1 mA with high res. option)​</li>
        <li><b>Overcurrent Protection:</b> 0.01 A to 5,5 A​</li>
        <li><b>Ripple and Noise:</b> {'< '}2 mArms​</li>
        <li><b>Display:</b> 8.9 cm (3.5") TFT-LCD​</li>
        <li><b>Resolution:</b> 320 × 240 Pixel​</li>
        <li><b>Additional Interfaces:</b> RS232​</li>
        <li><b>Input:</b> 230 V/AC, 220 V/AC, 120 V/AC oder 110 V/AC (adjustable)​</li>
</div>,
    },
    {
      id: 11,
      name:"CRO",
      img:cro,
      description: <div>
<li><b>Brand:</b> Scientech 801C​</li>
<li><b>Display :</b> CRT with Digital Readout with Backlit OLED​</li>
<li><b>Bandwidth :</b> 30 MHz ​</li>
<li><b>Magnification :</b> x10 ​</li>
<li><b>Max sweep Speed :</b> 20 ns ​</li>
<li><b>Stable Triggering :</b> 40MHz​</li>
<li><b>Functions:</b> Alternate Triggering , Sharp Trace CRT & Auto focus​</li>
<li><b>Connectors :</b> Gold Plated BNC ​</li>
<li><b>Component Tester :</b> YES</li>
</div>,
    },
    // ... more printer objects
  ];