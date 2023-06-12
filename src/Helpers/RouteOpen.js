export default function openRoute(option) {
  const routeData = this.$router.resolve(option);
  window.open(routeData.href, '_blank');
}
