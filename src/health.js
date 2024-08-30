export default function healthBar(char) {
	if (char.health >= 51) {
		return "healthy"
	} else if (char.health >= 15) {
		return "wounded"
	} else {
		return "critical"
	}
}