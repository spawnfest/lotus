defmodule Lotus.ButtonTest do
  use Lotus.Support.ConnCase, async: true

  @moduletag :component_button

  alias Lotus.Button

  test "Creates a default button" do
    html =
      render_surface do
        ~F"""
        <Button>Hello</Button>
        """
      end

    assert html =~ """
           <button type="button" class="uk-button">
             Hello
           </button>
           """
  end

  test "Creates a button with a kind" do
    html =
      render_surface do
        ~F"""
        <Button kind="primary">Primary Button</Button>
        """
      end

    assert html =~ """
           <button type="button" class="uk-button uk-button-primary">
             Primary Button
           </button>
           """
  end

  test "Creates a button with a size" do
    html =
      render_surface do
        ~F"""
        <Button size="small">Small Button</Button>
        """
      end

    assert html =~ """
           <button type="button" class="uk-button uk-button-small">
             Small Button
           </button>
           """
  end

  test "Creates a button with a kind and size" do
    html =
      render_surface do
        ~F"""
        <Button size="large" kind="danger">
          Large Danger Button
        </Button>
        """
      end

    assert html =~ """
           <button type="button" class="uk-button uk-button-danger uk-button-large">
             Large Danger Button
           </button>
           """
  end

  test "Creates with label instead of slot" do
    html =
      render_surface do
        ~F"""
        <Button label="Hello Lotus" />
        """
      end

    assert html =~ """
           <button type="button" class="uk-button">
             Hello Lotus
           </button>
           """
  end

  test "Creates a button with plain old classes" do
    html =
      render_surface do
        ~F"""
        <Button class="uk-button uk-button-small uk-button-primary">
          Class Button
        </Button>
        """
      end

    assert html =~ """
           <button type="button" class="uk-button uk-button-small uk-button-primary">
             Class Button
           </button>
           """
  end

  test "Creates a full-width button" do
    html =
      render_surface do
        ~F"""
        <Button width="1-1">
          Block Button
        </Button>
        """
      end

    assert html =~ """
           <button type="button" class="uk-button uk-width-1-1">
             Block Button
           </button>
           """
  end

  test "Creates a clickable button" do
    html =
      render_surface do
        ~F"""
        <Button width="1-1" click="click">
          Block Button
        </Button>
        """
      end

    assert html =~ """
           <button phx-click="click" type="button" class="uk-button uk-width-1-1">
             Block Button
           </button>
           """
  end

  test "Button renders the extra options correctly" do
    html =
      render_surface do
        ~F"""
        <Button width="1-1" click="click" opts={disabled: true, value: "HI"}>
          Block Button
        </Button>
        """
      end

    assert html =~ """
           <button disabled phx-click="click" value="HI" type="button" class="uk-button uk-width-1-1">
             Block Button
           </button>
           """
  end
end
