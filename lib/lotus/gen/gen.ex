defmodule Lotus.Gen do
  alias Lotus.Gen.Helpers

  @identifier "container"
  @current_module %{
    file: @identifier,
    module: Phoenix.Naming.camelize(@identifier),
    class: ~s/uk-#{@identifier |> String.replace("_", "-")}/,
    props: ["size"],
    hook: false,
    playground: false,
    examples: 1,
    cases: [
      {
        """
        <Container size="small">
          Hello
        </Container>
        """,
        """
        <div class="uk-container uk-container-small">
          Hello
        </div>
        """
      }
    ]
  }
  def get_config, do: @current_module

  def run do
    Helpers.list_artifacts(@current_module)
  end
end
