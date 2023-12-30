# order 基于bun的后端实现

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.0.20. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.


# 添加 Docker file
To docker image build
```bash
    docker build -t order .
```
To run docker container:
```bash
    docker run -p 10810:10810 -d order:latest
```