var AjaxController= {
    Save:function(serviceUrl) {
        var dataSource = new kendo.data.DataSource({
            transport: {
                // make JSONP request to http://demos.telerik.com/kendo-ui/service/products/create
                create: function (options){
                    $.ajax({
                        url: serviceUrl,
                        dataType: "jsonp", // "jsonp" is required for cross-domain requests; use "json" for same-domain requests
                        // send the created data items as the "models" service parameter encoded in JSON
                        data: {
                            models: kendo.stringify(options.data.models)
                        },
                        success: function(result) {
                            // notify the data source that the request succeeded
                            options.success(result);
                        },
                        error: function(result) {
                            // notify the data source that the request failed
                            options.error(result);
                        }
                    });
                },
                parameterMap: function (data, type) {
                    if (type == "create") {
                        // send the created data items as the "models" service parameter encoded in JSON
                        return { models: kendo.stringify(data.models) };
                    }
                }
            },
            batch: true,
            schema: {
                model: { id: "ProductID" }
            }
        });
        // create a new data item
        dataSource.add({ ProductName: "New Product" });
        // save the created data item
        dataSource.sync();

    }

}