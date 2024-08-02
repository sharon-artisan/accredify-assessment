/* 
    This is to format name into initials
*/
export function formatInitials(name) {
    if (!name) return '';

    const names = name.split(' ');

    if (names.length === 1) {
        
        return names[0][0].toUpperCase();
    }

    return names.map(n => n[0].toUpperCase()).join('');
}
