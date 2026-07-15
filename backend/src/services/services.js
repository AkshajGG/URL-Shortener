export function generateShortCode() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var shortCode = "";
    
    for(let i=1; i<=6; i++) {
        shortCode += chars[Math.floor(Math.random() * 62)];
    }

    return shortCode;
}