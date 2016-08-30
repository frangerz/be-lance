require 'test_helper'

class CompanyDetailsControllerTest < ActionController::TestCase
  setup do
    @company_detail = company_details(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:company_details)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create company_detail" do
    assert_difference('CompanyDetail.count') do
      post :create, company_detail: { abn: @company_detail.abn, acn: @company_detail.acn, company_name: @company_detail.company_name, description: @company_detail.description, type: @company_detail.type }
    end

    assert_redirected_to company_detail_path(assigns(:company_detail))
  end

  test "should show company_detail" do
    get :show, id: @company_detail
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @company_detail
    assert_response :success
  end

  test "should update company_detail" do
    patch :update, id: @company_detail, company_detail: { abn: @company_detail.abn, acn: @company_detail.acn, company_name: @company_detail.company_name, description: @company_detail.description, type: @company_detail.type }
    assert_redirected_to company_detail_path(assigns(:company_detail))
  end

  test "should destroy company_detail" do
    assert_difference('CompanyDetail.count', -1) do
      delete :destroy, id: @company_detail
    end

    assert_redirected_to company_details_path
  end
end
