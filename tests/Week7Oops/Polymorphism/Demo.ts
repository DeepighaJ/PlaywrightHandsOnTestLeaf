class Demo {

    cclick(a: string, b?: number, c?: number) {

        console.log("A:", a);

        if (b !== undefined) {
            console.log("B:", b);
        }

        if (c !== undefined) {
            console.log("C:", c);
        }
    }
}

let m = new Demo();

// Correct ways
m.cclick("Kala");                     // Only A
m.cclick("Kala", 10);                 // A and B
m.cclick("Kala", undefined, 4);       // A and C (Skip B properly)