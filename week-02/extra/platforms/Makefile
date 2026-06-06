-include .env
export

IMAGE := $(DOCKERHUB_USERNAME)/hello-platforms
TAG   := 1.0.0

# --- inspect ----------------------------------------------------------------

# what arch is my host
arch:
	@echo "host: $$(uname -m)"

# what arch is baked into a local image
inspect-local:
	docker image inspect $(IMAGE):$(TAG) --format '{{.Architecture}}'

# what platforms exist in Docker Hub under this tag
inspect-remote:
	docker manifest inspect $(IMAGE):$(TAG)

# --- build ------------------------------------------------------------------

# build under the host's native platform
build:
	docker build -t $(IMAGE):$(TAG) .

# build under linux/amd64 (Intel/AMD servers) — on M1 this goes through QEMU/Rosetta
build-amd64:
	docker build --platform linux/amd64 -t $(IMAGE):$(TAG)-amd64 .

# build under linux/arm64 (M1+, AWS Graviton)
build-arm64:
	docker build --platform linux/arm64 -t $(IMAGE):$(TAG)-arm64 .

# --- push -------------------------------------------------------------------

# push single-arch tags (must be built first)
push-amd64:
	docker push $(IMAGE):$(TAG)-amd64

push-arm64:
	docker push $(IMAGE):$(TAG)-arm64

# multi-arch build + push in one shot — produces a manifest list under one tag
buildx-push:
	docker buildx create --use --name multi 2>/dev/null || true
	docker buildx build \
		--platform linux/amd64,linux/arm64 \
		-t $(IMAGE):$(TAG) \
		-t $(IMAGE):latest \
		--push \
		.

# --- compose ----------------------------------------------------------------

# build locally and run
up-build:
	docker compose -f docker-compose.build.yml up --build

down-build:
	docker compose -f docker-compose.build.yml down

# pull from Docker Hub and run (uses platform: linux/amd64)
up-pull:
	docker compose -f docker-compose.pull.yml pull
	docker compose -f docker-compose.pull.yml up

down-pull:
	docker compose -f docker-compose.pull.yml down

.PHONY: arch inspect-local inspect-remote \
        build build-amd64 build-arm64 \
        push-amd64 push-arm64 buildx-push \
        up-build down-build up-pull down-pull
