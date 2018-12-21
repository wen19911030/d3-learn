(function() {
  //位置参数
  let margin = {top: 20, right: 120, bottom: 20, left: 120},
    width = 960 - margin.right - margin.left,
    height = 800 - margin.top - margin.bottom;

  const tree = d3.layout.tree().size([height, width]);

  const diagonal = d3.svg.diagonal().projection(d => [d.y, d.x]);

  const svg = d3
    .select('body')
    .append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
})();
