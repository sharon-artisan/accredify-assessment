export function formatIndefiniteArticle(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    if (!word) return "";
    return vowels.includes(word.charAt(0).toUpperCase()) ? "an" : "a";
}