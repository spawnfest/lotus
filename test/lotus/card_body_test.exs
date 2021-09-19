defmodule Lotus.CardBodyTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_card_body

  alias Lotus.CardBody

  test "Creates a CardBody" do
    html =
      render_surface do
        ~F"""
        <CardBody>Hello</CardBody>
        """
      end

    assert html =~ """
           <div class="uk-card-body">
             Hello
           </div>
           """
  end
end
