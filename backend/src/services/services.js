export function generateShortCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const shortCode = "";
    
    for(let i=1; i <=6; i++) {
        shortCode += char[Math.floor(Math.random * 62)];
    }

    return shortCode;
}