generate:  ## Generate the static pages
	docker build -t "geo-knowledge-hub/geo-knowledge-hub-docs:0.1" . \
		&& docker run --rm -v geo_knowledge_hub_docs:/app/site/build geo-knowledge-hub/geo-knowledge-hub-docs:0.1

#
# Documentation function (thanks for https://marmelab.com/blog/2016/02/29/auto-documented-makefile.html)
#
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
