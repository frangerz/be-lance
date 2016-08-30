class ExtraDetailsController < ApplicationController
  before_action :set_extra_detail, only: [:show, :edit, :update, :destroy]

  # GET /extra_details
  # GET /extra_details.json
  def index
    @extra_details = ExtraDetail.all
  end

  # GET /extra_details/1
  # GET /extra_details/1.json
  def show
  end

  # GET /extra_details/new
  def new
    @extra_detail = ExtraDetail.new
  end

  # GET /extra_details/1/edit
  def edit
  end

  # POST /extra_details
  # POST /extra_details.json
  def create
    @extra_detail = ExtraDetail.new(extra_detail_params)

    respond_to do |format|
      if @extra_detail.save
        format.html { redirect_to @extra_detail, notice: 'Extra detail was successfully created.' }
        format.json { render :show, status: :created, location: @extra_detail }
      else
        format.html { render :new }
        format.json { render json: @extra_detail.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /extra_details/1
  # PATCH/PUT /extra_details/1.json
  def update
    respond_to do |format|
      if @extra_detail.update(extra_detail_params)
        format.html { redirect_to @extra_detail, notice: 'Extra detail was successfully updated.' }
        format.json { render :show, status: :ok, location: @extra_detail }
      else
        format.html { render :edit }
        format.json { render json: @extra_detail.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /extra_details/1
  # DELETE /extra_details/1.json
  def destroy
    @extra_detail.destroy
    respond_to do |format|
      format.html { redirect_to extra_details_url, notice: 'Extra detail was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_extra_detail
      @extra_detail = ExtraDetail.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def extra_detail_params
      params.require(:extra_detail).permit(:type, :service, :description, :mobile, :home_phone, :alternate_email, :address)
    end
end
