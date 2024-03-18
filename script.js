function toCase(text) {
        // write your code here
        const upper = text.trim().toUpperCase();
        const lower = text.trim().toLowerCase();
        return `${lower}-${upper}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
