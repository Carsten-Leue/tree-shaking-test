function toLowerCase(aValue: string): string {
    return aValue.toLowerCase() + 'DERIVED_CONSTANT';
}

export const SIMPLE_CONSTANT = 'SIMPLE_CONSTANT';

export const DERIVED_CONSTANT = toLowerCase(SIMPLE_CONSTANT);