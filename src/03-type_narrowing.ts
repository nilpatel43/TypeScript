// Type Narrowing

// इसमें Condition के आधार पर Type को छोटा किया जाता है।

function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai...`;
  }
  return `Chai order: ${kind} cups`;
}

function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return "Serving default masala chai...";
}

function orderChai(size: "small" | "medium" | "large" | number) {
  if(size === "small") {
    return `Ordering small chai...`;
  }
  if(size === "medium" || size === "large") {
    return `make extra strong chai...`;
  }

  return `chai order ${size}`;
}


// Type Guards

// इससे पता चलता है कि Variable किस Class का Object है।

class KulhadChai {
  serve() {
    return "Serving chai in kulhad...";
  }
}

class CuttingChai {
  serve() {
    return "Serving cutting chai...";
  }
}

function serve(chai: KulhadChai | CuttingChai) {
  if (chai instanceof KulhadChai) {
    return chai.serve();
  }
}


// Custom Type

// इसमें हम अपना खुद का Type बनाते हैं।

type ChaiOrder = {
    type: string
    sugar: number
}

// यहाँ Check किया जाता है कि Object ChaiOrder Type का है या नहीं।
function isChaiOrder(obj: any): obj is ChaiOrder {
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: ChaiOrder | string) {
    if (isChaiOrder(item)) {
        return `Serving ${item.type} chai with ${item.sugar} sugar...`;
    }
    return `Serving custom chai: ${item}`;
}


// अलग-अलग Chai के लिए Type बनाए गए हैं।
type MasalaChai = {type: "masala", spicelevel: number}
type GaramChai = {type: "ginger", amount: number}
type ElaichiChai = {type: "elaichi", aroma: number}

type Chai = MasalaChai | GaramChai | ElaichiChai

// यहाँ Switch की मदद से Chai का Type Check होता है।
function MakeChai(order: Chai) {
    switch(order.type) {
        case "masala":
            return `Masala chai`
            break;
        case "ginger":
            return `Ginger chai`
            break;
        case "elaichi":
            return `Elaichi chai`
            break;
    }
}


// यहाँ Property की मदद से Type Check किया जाता है।
function brew(order: MasalaChai | GaramChai) {
    if ("spicelevel" in order) {
        //
    }
}


// Type Unknown example

// Unknown Type में Value का उपयोग करने से पहले उसका Type Check करना पड़ता है।

// function isStringArray(arr: unknown): arr is string[] {

// }