defmodule Lotus.Catalogue do
  @moduledoc """
  Catalogue implementation for Lotus.
  Allows calalogue tools to properly run examples and playgrounds provided
  by this lib.
  """

  use Surface.Catalogue

  load_asset("assets/app.js", as: :app_js)
  load_asset("assets/app.css", as: :app_css)

  @impl true
  def config() do
    [
      head_css: "<style>#{@app_css}</style>",
      head_js: "<script>#{@app_js}</script>",
      playground: [
        body: [
          style: "padding: 1.5rem; height: 100%;",
          class: "has-background-light"
        ]
      ]
    ]
  end
end
