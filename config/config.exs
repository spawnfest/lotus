use Mix.Config

config :phoenix, :json_library, Jason

config :esbuild,
  version: "0.12.26",
  default: [
    args: ~w(js/app.js --bundle --target=es2016 --outdir=../priv/catalogue/assets),
    cd: Path.expand("../assets", __DIR__),
    env: %{"NODE_PATH" => Path.expand("../deps", __DIR__)}
  ]
