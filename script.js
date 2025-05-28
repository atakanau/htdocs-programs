/*
{
	"version": "1.0.0",
	"verification": "68747470733A2F2F6765726865732E70726F6772616D732E636F6D2E7472"
}
*/
document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
	link.href = link.href.replace('|', '@');
});
document.querySelectorAll('a[href^="https://t.me"]').forEach(link => {
    link.href = link.href.replace(/\.([^.]*)$/, '/$1');
});
