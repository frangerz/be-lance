class StockersController < ApplicationController
  before_action :set_stocker, only: [:show, :edit, :update, :destroy]

  # GET /stockers
  # GET /stockers.json
  def index
    @stockers = Stocker.all
  end

  # GET /stockers/1
  # GET /stockers/1.json
  def show
  end

  # GET /stockers/new
  def new
    @stocker = Stocker.new
  end

  # GET /stockers/1/edit
  def edit
  end

  # POST /stockers
  # POST /stockers.json
  def create
    @stocker = Stocker.new(stocker_params)

    respond_to do |format|
      if @stocker.save
        format.html { redirect_to @stocker, notice: 'Stocker was successfully created.' }
        format.json { render :show, status: :created, location: @stocker }
      else
        format.html { render :new }
        format.json { render json: @stocker.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stockers/1
  # PATCH/PUT /stockers/1.json
  def update
    respond_to do |format|
      if @stocker.update(stocker_params)
        format.html { redirect_to @stocker, notice: 'Stocker was successfully updated.' }
        format.json { render :show, status: :ok, location: @stocker }
      else
        format.html { render :edit }
        format.json { render json: @stocker.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stockers/1
  # DELETE /stockers/1.json
  def destroy
    @stocker.destroy
    respond_to do |format|
      format.html { redirect_to stockers_url, notice: 'Stocker was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_stocker
      @stocker = Stocker.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def stocker_params
      params.require(:stocker).permit(:type, :company_name, :abn, :acn, :description)
    end
end
