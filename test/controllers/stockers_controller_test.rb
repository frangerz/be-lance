require 'test_helper'

class StockersControllerTest < ActionController::TestCase
  setup do
    @stocker = stockers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:stockers)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create stocker" do
    assert_difference('Stocker.count') do
      post :create, stocker: { abn: @stocker.abn, acn: @stocker.acn, company_name: @stocker.company_name, description: @stocker.description, type: @stocker.type }
    end

    assert_redirected_to stocker_path(assigns(:stocker))
  end

  test "should show stocker" do
    get :show, id: @stocker
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @stocker
    assert_response :success
  end

  test "should update stocker" do
    patch :update, id: @stocker, stocker: { abn: @stocker.abn, acn: @stocker.acn, company_name: @stocker.company_name, description: @stocker.description, type: @stocker.type }
    assert_redirected_to stocker_path(assigns(:stocker))
  end

  test "should destroy stocker" do
    assert_difference('Stocker.count', -1) do
      delete :destroy, id: @stocker
    end

    assert_redirected_to stockers_path
  end
end
