defmodule Lotus.Gen do
  alias Lotus.Gen.Helpers

  @identifier "container"
  @current_module %{
    hook: true,
    file: @identifier,
    module: Phoenix.Naming.camelize(@identifier),
    class: ~s/uk-#{@identifier |> String.replace("_", "-")}/,
    props: [
      %{name: :size, type: :string, values: ~w/xsmall small large xlarge expand/}
    ],
    examples: [
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
    ],
    playground: true,
  }
  def run do
    Helpers.list_artifacts(@current_module)
  end
end
