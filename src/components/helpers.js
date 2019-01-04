export function autoParagraph(html) {
	html = "<p>" + html.split(/\n/).join("</p>\n<p>") + "</p>";
	return html;
}

export function decodeHTML(html) {
	html = html.replace("amp;", "");
	return html.replace(/&#(\d+);/g, function(match, dec) {
		return String.fromCharCode(dec);
	});
}

export function flattenSlug(slug) {
	if (slug === "home" || slug === "homepage") {
		slug = "";
	}
	return slug;
}

export function httpTohttps(html) {
	return html.replace("http://", "https://");
}

export function removeDimensions(html) {
	html = html.replace(/width="[^"]*"/g, "");
	html = html.replace(/height="[^"]*"/g, "");
	return html;
}

export function removeOrphans(html) {
	return html.replace(/ ([^ ]*)$/, " $1");
}

export function slugTitle(html) {
	html = html.replace("-", " ");
	html = html.toLowerCase().split(" ");
	for (var i = 0; i < html.length; i++) {
		// You do not need to check if i is larger than splitStr length, as your for does that for you
		// Assign it back to the array
		html[i] = html[i].charAt(0).toUpperCase() + html[i].substring(1);
	}
	// Directly return the joined string
	return html.join(" ");
}
