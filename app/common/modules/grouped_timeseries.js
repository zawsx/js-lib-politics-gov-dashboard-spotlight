define([
  'extensions/controllers/module',
  'common/collections/categories',
  'common/views/visualisations/stacked-graph'
],
function (ModuleController, CategoriesCollection, StackedGraph) {

  var GroupedTimeseriesModule = ModuleController.extend({
    className: 'grouped_timeseries',
    visualisationClass: StackedGraph,
    collectionClass: CategoriesCollection,
    clientRenderOnInit: true,
    requiresSvg: true,
    collectionOptions: function () {
      return {
        valueAttr: this.model.get("value-attr"),
        category: this.model.get("category"),
        period: this.model.get("period"),
        seriesList: this.model.get("series"),
        filter_by: this.model.get("filter-by")
      };
    }
  });

  return GroupedTimeseriesModule;
});
