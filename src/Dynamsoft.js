import Dynamsoft from "dynamsoft-javascript-barcode";
Dynamsoft.BarcodeReader.engineResourcePath =
  "https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@7.3.0-v4/dist/";
// Please visit https://www.dynamsoft.com/CustomerPortal/Portal/TrialLicense.aspx to get a trial license
Dynamsoft.BarcodeReader.productKeys =
  "t0068NQAAAIPB/SvprcJVM6EA/Ba78nMtIMXMcFEzkyZL+5imH+ZgaDDY7Z7WQqIQkVFeTuwzO8bRm8zm2pCFSltONX3IpLs=";
// Dynamsoft.BarcodeReader._bUseFullFeature = true; // Control of loading min wasm or full wasm.
export default Dynamsoft;
