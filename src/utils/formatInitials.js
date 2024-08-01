// src/utils/getInitials.js
export function formatInitials(name) {
    if (!name) return '';

    const names = name.split(' ');

    if (names.length === 1) {
        // For single name (e.g., "John"), return the first letter
        return names[0][0].toUpperCase();
    }

    // For multiple names (e.g., "John Smith"), return the first letter of each name
    return names.map(n => n[0].toUpperCase()).join('');
}
