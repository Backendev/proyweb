from flask import Flask, request, jsonify
from flask import render_template

class Config:
    SECRET_KEY = 'SUPER SECRETO'
    TESTING=True

class Aplication:
    
    def __init__(self):
        self.app =self.create_app()
        self.menu = [["inicio","#contenido_uno"],["profile","#contenido_dos"],["edward","#contenido_tres"]]
        self.w_menu = int(100/len(self.menu))
        self.context = {
                'wmenu': str(self.w_menu)+"%",
                'menu': self.menu,
                'bordercolor':"#a1b1c1",
                'planetcolor':"#a1b1c1",
                'interncolor':"#556575",
                'con':"contenido1.html"
            }
        @self.app.route('/')
        def index():
            return render_template("index.html",**self.context)
        @self.app.route('/pet', methods=['GET'])
        def main():
            option = request.args.get('option')
            res = {"1":"uno de Edward","option":option}
            return jsonify(res)

    def create_app(self):
        app = Flask(__name__)
        app.config.from_object(Config)
        return app
    
    def run(self):
        self.app.run()





if __name__ == '__main__':
    inst = Aplication()
    inst.run()