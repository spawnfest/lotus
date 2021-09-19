defmodule Lotus.CardTitleTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_card_title

  alias Lotus.CardTitle

  test "Creates a CardTitle" do
    html =
      render_surface do
        ~F"""
        <CardTitle>Hello</CardTitle>
        """
      end

    assert html =~ """
           <h3 class="uk-card-title">
             Hello
           </h3>
           """
  end
end
