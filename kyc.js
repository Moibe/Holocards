const urlParams = new URLSearchParams(window.location.search);
const direccion = urlParams.get('dir');
const nombre = urlParams.get('nombre');
CUAL = " Verification pending, wating for documents.";
if (direccion == "0x521c72007557063b2a61998f7f578cb752c8dcac" && IBAN == "772123456789012345") {
CUAL = "Documents received, verifying."; 
}
